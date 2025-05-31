import React from 'react';

export default function HighlightText({ color, children }) {
    // Клонируем элемент и добавляем/обновляем стиль цвета
    return React.cloneElement(children, {
      style: {
        ...(children.props.style || {}),
        color: color,
      },
    });

};