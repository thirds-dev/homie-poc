import homie from "../homie";

const handler = async (req, res) => {
  try {
    console.log(req.path);
    const path = req.path.split("/");
    const method = path.reduce(
      (prev, cur) => (cur && prev[cur] ? prev[cur] : prev),
      homie
    );
    const result = await method(req.query);

    return res.send(result);
  } catch (err) {
    //console.log(err);
    res.status(500).send(err);
  }
};

export default handler;
