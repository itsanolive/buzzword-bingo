import React, { useState, useEffect, useRef } from 'react';

// * from https://stackoverflow.com/questions/61339259/how-to-dynamically-import-svg-and-render-it-inline/61472427#61472427
const Icon = ({ name, ...props }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../icons/${name}.svg`)).default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
        // console.log(ImportedIconRef);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    // console.log(ImportedIcon);
    return (
        <ImportedIcon {...props} />
    )
  }

  return null;
};

export default Icon;
