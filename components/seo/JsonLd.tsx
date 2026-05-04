import React from 'react';

interface JsonLdProps {
  data: unknown;
}

/**
 * JsonLd component renders a script tag with application/ld+json.
 * It uses dangerouslySetInnerHTML to safely inject the JSON string.
 */
const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;
