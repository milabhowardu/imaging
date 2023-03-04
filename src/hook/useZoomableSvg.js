import { useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

import {select, zoomTransform, zoom} from "d3";
import { event } from "d3-selection";

import CR1_slide_2_Mmap from "../assets/CR1/CR1_slide_2_Mmap.jpg";

export default function useZoomableSVG(ref) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => resizeObserver.unobserve(observeTarget);
  }, [ref]);

  useEffect(() => {
    const svg = select(ref.current);
    const g = svg.select("g");

    g.append("image")
      .attr("xlink:href", CR1_slide_2_Mmap)
      .attr("width", 1122)
      .attr("height", 500);

    svg.call(
        zoom()
        .extent([
          [0, 0],
          [dimensions.width, dimensions.height],
        ])
        .scaleExtent([0.5, 8])
        .on("zoom", zoomed)
    );

    svg.attr("width", dimensions.width).attr("height", dimensions.height);

    function zoomed() {
      g.attr("transform", zoomTransform(this));
    }
  }, [dimensions]);

  return dimensions;
}
