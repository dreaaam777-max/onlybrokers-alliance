import { useEffect } from "react";

export default function StructuredData({ data }) {
  useEffect(() => {
    if (!data) return;

    const id = "structured-data-jsonld";
    let script = document.getElementById(id);

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }

    // Можно передать объект или массив объектов
    script.text = JSON.stringify(data);

    return () => {
      // можно не удалять, но для корректности удалим при размонтаже
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [data]);

  return null;
}
