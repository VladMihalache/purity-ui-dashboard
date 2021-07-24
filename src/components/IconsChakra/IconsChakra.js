import { createIcon } from "@chakra-ui/icons";

export const BuildIcon = createIcon({ 
  // Doesn't display the full icon without w and h being specified
  displayName: "BuildIcon",
  viewBox: "0 24 24",
  fill:"currentColor",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path d="M20.885 5.547a.703.703 0 00-1.122-.176l-2.7 2.702a.708.708 0 01-.995 0l-1.167-1.169a.702.702 0 010-.994l2.689-2.69a.704.704 0 00-.21-1.138c-2.031-.908-4.566-.435-6.164 1.152-1.358 1.348-1.763 3.455-1.11 5.78a.698.698 0 01-.197.703L2.593 16.4a2.82 2.82 0 103.981 3.983l6.754-7.332a.699.699 0 01.693-.2 7.885 7.885 0 002.03.279c1.469 0 2.757-.475 3.686-1.39 1.72-1.695 1.983-4.57 1.148-6.192zM4.623 19.901a1.407 1.407 0 11-.305-2.797 1.407 1.407 0 01.305 2.797z" />
  ),
});

export const CreditIcon = createIcon({
  displayName: "CreditIcon",
  viewBox: "0 0 24 24",
  fill:"currentColor",
  path: (
    <path d="M1.406 17.023a2.461 2.461 0 002.461 2.46h14.766a2.461 2.461 0 002.46-2.46v-6.768H1.407v6.768zm2.9-3.34a1.318 1.318 0 011.319-1.318h2.11a1.318 1.318 0 011.318 1.318v.879a1.318 1.318 0 01-1.319 1.318H5.625a1.318 1.318 0 01-1.318-1.318v-.879zM18.633 4.014H3.867a2.46 2.46 0 00-2.46 2.461v1.143h19.687V6.475a2.46 2.46 0 00-2.461-2.46z" />
  ),
});

export const CartIcon = createIcon({
  displayName: "CartIcon",
  viewBox: "0 0 24 24",
  fill:"currentColor",
  path: (
    <path d="M7.984 19.937a1.406 1.406 0 100-2.812 1.406 1.406 0 000 2.812zM17.828 19.937a1.406 1.406 0 100-2.812 1.406 1.406 0 000 2.812zM20.324 5.558a1.051 1.051 0 00-.815-.386H6.134l-.27-1.528a.703.703 0 00-.692-.581H2.359a.703.703 0 000 1.406h2.223L6.59 15.841a.703.703 0 00.692.581h11.25a.703.703 0 100-1.406H7.871l-.248-1.406h10.62a1.057 1.057 0 001.035-.848l1.266-6.328a1.055 1.055 0 00-.22-.876z" />
  ),
});

export const DocumentIcon = createIcon({
  displayName: "DocumentIcon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g>
      <path d="M18.809 10.344h-6.153a2.11 2.11 0 01-2.11-2.11V2.083a.176.176 0 00-.175-.176H6.328A2.812 2.812 0 003.516 4.72v14.063a2.812 2.812 0 002.812 2.812h9.844a2.812 2.812 0 002.812-2.813V10.52a.176.176 0 00-.175-.176z" />
      <path d="M18.423 8.789l-6.32-6.32a.088.088 0 00-.15.062v5.705a.703.703 0 00.703.703h5.705a.088.088 0 00.062-.15z" />
    </g>
  ),
});

export const GlobeIcon = createIcon({
  displayName: "GlobeIcon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  stroke: "currentColor",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g>
      <path
        d="M11.25 2.109a9.14 9.14 0 100 18.281 9.14 9.14 0 000-18.281z"
        stroke-width=".75"
        stroke-miterlimit="10"
      />
      <path
        d="M11.25 2.109C8.698 2.109 6.3 6.2 6.3 11.249c0 5.048 2.4 9.14 4.951 9.14 2.552 0 4.951-4.092 4.951-9.14 0-5.048-2.399-9.14-4.95-9.14z"
        stroke-width=".75"
        stroke-miterlimit="10"
      />
      <path d="M5.156 5.156C6.836 6.349 8.952 7.06 11.25 7.06c2.298 0 4.414-.711 6.094-1.904" />
      <path
        d="M5.156 5.156C6.836 6.349 8.952 7.06 11.25 7.06c2.298 0 4.414-.711 6.094-1.904M17.344 17.344c-1.68-1.193-3.796-1.904-6.094-1.904-2.298 0-4.413.711-6.094 1.904"
        stroke-width=".75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.25 2.109v18.28M20.39 11.249H2.11"
        stroke-width=".75"
        stroke-miterlimit="10"
      />
    </g>
  ),
});

export const HelpIcon = createIcon({
  displayName: "HelpIcon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path d="M11.25 0C5.04 0 0 5.04 0 11.25S5.04 22.5 11.25 22.5 22.5 17.46 22.5 11.25 17.46 0 11.25 0zm-.352 17.813a1.172 1.172 0 110-2.344 1.172 1.172 0 010 2.344zm1.96-5.977c-.95.637-1.08 1.222-1.08 1.758a.82.82 0 11-1.641 0c0-1.284.59-2.305 1.806-3.121 1.13-.758 1.768-1.239 1.768-2.295 0-.718-.41-1.264-1.26-1.668-.199-.095-.644-.187-1.191-.18-.687.008-1.22.172-1.63.503-.775.623-.84 1.302-.84 1.312a.821.821 0 11-1.642-.08c.007-.142.106-1.425 1.452-2.507.698-.562 1.585-.854 2.636-.866.745-.01 1.444.117 1.918.34 1.418.672 2.198 1.79 2.198 3.146 0 1.982-1.325 2.872-2.494 3.658z" />
  ),
});

export const HomeIcon = createIcon({
  displayName: "HomeIcon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g>
      <path d="M11.494 4.951a.351.351 0 00-.486 0l-8.09 7.729a.352.352 0 00-.109.254v7.254a1.406 1.406 0 001.405 1.406h4.223a.703.703 0 00.704-.703v-5.976a.351.351 0 01.351-.352h3.516a.351.351 0 01.351.352v5.976a.703.703 0 00.704.703h4.22a1.407 1.407 0 001.407-1.406v-7.254a.35.35 0 00-.108-.254L11.494 4.95z" />
      <path d="M21.574 11.23l-3.287-3.144V3.314a.703.703 0 00-.703-.703h-2.11a.703.703 0 00-.703.703V4.72l-2.545-2.434c-.239-.24-.593-.378-.976-.378-.38 0-.734.138-.972.379L.93 11.23a.717.717 0 00-.058.983.703.703 0 001.018.046l9.119-8.713a.352.352 0 01.486 0l9.12 8.713a.703.703 0 00.992-.019c.27-.28.248-.74-.033-1.01z" />
    </g>
  ),
});

export const PayPalIcon = createIcon({
  displayName: "PayPalIcon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g>
      <path d="M16.179 2.532C15.142 1.357 13.265.854 10.863.854H3.895a.997.997 0 00-.986.834L.007 19.945a.595.595 0 00.591.686H4.9l1.08-6.8-.033.215a.993.993 0 01.983-.834h2.044c4.017 0 7.16-1.619 8.08-6.3.027-.14.07-.406.07-.406.262-1.732-.001-2.907-.945-3.974z" />
      <path d="M18.213 7.393c-.998 4.61-4.184 7.048-9.24 7.048H7.142L5.773 23.1h2.973a.87.87 0 00.862-.731l.035-.184.684-4.297.044-.237a.87.87 0 01.86-.731h.544c3.514 0 6.264-1.416 7.068-5.51.322-1.644.166-3.021-.63-4.017z" />
    </g>
  ),
});

export const PersonIcon = createIcon({
  displayName: "PersonIcon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path d="M14.618 3.338c-.855-.924-2.05-1.432-3.368-1.432-1.325 0-2.524.505-3.375 1.423-.86.928-1.28 2.188-1.181 3.55.195 2.686 2.239 4.87 4.556 4.87s4.358-2.184 4.556-4.87c.1-1.349-.322-2.607-1.188-3.541zM18.984 21.592H3.515a1.363 1.363 0 01-1.063-.489 1.552 1.552 0 01-.316-1.279c.371-2.058 1.529-3.786 3.348-5 1.616-1.076 3.664-1.67 5.766-1.67s4.15.594 5.765 1.67c1.82 1.214 2.977 2.942 3.348 5 .085.471-.03.937-.315 1.279a1.362 1.362 0 01-1.064.49z" />
  ),
});

export const RocketIcon = createIcon({
  displayName: "RocketIcon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g>
      <path d="M20.99 2.182a.209.209 0 00-.156-.16c-2.574-.63-8.521 1.613-11.743 4.833a13.93 13.93 0 00-1.566 1.85c-.994-.087-1.987-.014-2.834.355-2.39 1.052-3.085 3.796-3.279 4.976a.424.424 0 00.464.492l3.837-.423c.002.29.02.578.052.866.02.2.108.386.25.527l1.486 1.482a.86.86 0 00.528.25c.286.033.573.05.86.053l-.42 3.832a.424.424 0 00.492.464c1.178-.19 3.927-.885 4.972-3.274.37-.847.445-1.836.36-2.824a13.96 13.96 0 001.855-1.567c3.232-3.216 5.462-9.03 4.842-11.732zm-8.067 7.896a2.11 2.11 0 112.983-2.984 2.11 2.11 0 01-2.983 2.984z" />
      <path d="M7.4 18.054c-.24.241-.627.335-1.092.416-1.044.178-1.967-.725-1.779-1.78.072-.401.283-.962.415-1.094a.192.192 0 00-.16-.328 2.636 2.636 0 00-1.544.753c-1.033 1.034-1.13 4.87-1.13 4.87s3.838-.097 4.872-1.13c.417-.417.682-.961.752-1.546.017-.184-.207-.293-.334-.16z" />
    </g>
  ),
});

export const StatsIcon = createIcon({
  displayName: "StatsIcon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path d="M4.57 22.297H3.164a1.055 1.055 0 01-1.055-1.054v-6.328a1.055 1.055 0 011.055-1.055H4.57a1.055 1.055 0 011.055 1.055v6.328a1.055 1.055 0 01-1.055 1.054zM14.414 22.296h-1.406a1.055 1.055 0 01-1.055-1.055V10.695a1.055 1.055 0 011.055-1.055h1.406a1.055 1.055 0 011.055 1.055V21.24a1.055 1.055 0 01-1.055 1.055zM19.336 22.297H17.93a1.055 1.055 0 01-1.055-1.055V5.773A1.055 1.055 0 0117.93 4.72h1.406a1.055 1.055 0 011.055 1.054v15.47a1.055 1.055 0 01-1.055 1.054zM9.492 22.297H8.086a1.055 1.055 0 01-1.055-1.055V2.257a1.055 1.055 0 011.055-1.054h1.406a1.055 1.055 0 011.055 1.054v18.985a1.055 1.055 0 01-1.055 1.055z" />
  ),
});

export const WalletIcon = createIcon({
  displayName: "WalletIcon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <g>
      <path d="M4.447 4.818h14.062c.164 0 .328.01.491.031a2.9 2.9 0 00-3.406-2.441L4.03 4.382h-.013a2.9 2.9 0 00-1.805 1.149 3.848 3.848 0 012.236-.713zM18.51 5.875H4.446a2.816 2.816 0 00-2.813 2.812v8.438a2.816 2.816 0 002.813 2.812h14.062a2.815 2.815 0 002.813-2.812V8.687a2.815 2.815 0 00-2.813-2.812zm-2.088 8.437a1.406 1.406 0 110-2.811 1.406 1.406 0 010 2.811z" />
      <path d="M1.656 11.651V7.28c0-.952.528-2.549 2.358-2.895 1.553-.291 3.091-.291 3.091-.291s1.011.703.176.703-.813 1.077 0 1.077 0 1.032 0 1.032L4.007 10.62l-2.35 1.032z" />
    </g>
  ),
});