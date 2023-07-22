import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function getFileObject(pathName) {
  const data = fs.readFileSync(pathName);
  return JSON.parse(data);
}

export default async function handler(req, res) {
  const { email, eventId } = req.body;
  const pathName = buildPath();
  const data = getFileObject(pathName);
  const { allEvents, events_categories } = data;

  if (!allEvents) {
    res.status(500).json({ message: "Something went wrong" });
    return;
  }

  if (req.method === "POST") {
    if (!email || !eventId) {
      res.status(409).json({ message: "Some fields are missing." });
      return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!email.match(emailRegex)) {
      res.status(422).json({ message: "Enter a valid email address" });
      return;
    }

    allEvents.forEach((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res
            .status(201)
            .json({ message: `${email} is already registered for ${eventId}` });
          return;
        }
        ev.emails_registered.push(email);
      }
    });

    fs.writeFileSync(
      pathName,
      JSON.stringify({ events_categories, allEvents })
    );
    res.status(200).json({
      message: `${email} have been registered successfully for ${eventId}`,
    });
    return;
  }

  res.status(200).json({ allEvents });
}
