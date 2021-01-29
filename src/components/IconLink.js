import React, { useState, useEffect, useRef } from 'react';

// function IconLink(props) {

//     function renderIcon(icon) {
//         let props = 'className="Footer__BuiltWith--Icon pr-2"'
//         let IconName = icon
//         return <IconName {...props} />
//     }

//     return (
//         <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href={props.href}
//             aria-label={props.children} className="flex">
//             renderIcon({props.icon})
//         </a>
//     )
// }

// * from https://stackoverflow.com/questions/61339259/how-to-dynamically-import-svg-and-render-it-inline/61472427#61472427
const IconLink = ({ name, ...props }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (await import(`../icons/${name}.svg`)).ReactComponent;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
        console.log(ImportedIconRef);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    let className = 'Footer__BuiltWith--Icon pr-2'
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.href}
            aria-label={props.children} className="flex">
            <ImportedIcon className={className} />
        </a>
    )
  }

  return null;
};

// TODO solve undefined ImportedIconRef.current with webpack svgr loader
// * https://egghead.io/lessons/react-add-svgs-as-react-components-with-create-react-app-2-0

export default IconLink;
