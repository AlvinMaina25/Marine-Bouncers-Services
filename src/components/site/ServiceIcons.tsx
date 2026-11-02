import type { SVGProps } from "react";

/**
 * Marine Bouncers service line icons.
 * 24x24 grid, 2px stroke, rounded caps/joins, currentColor — same
 * conventions as lucide-react, kept visually consistent as a set.
 */

export type ServiceIconProps = SVGProps<SVGSVGElement>;

function iconProps(props: ServiceIconProps): ServiceIconProps {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
  };
}

/** VIP / close protection */
export function VipProtectionIcon(props: ServiceIconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M15 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="m16 11 2 2 4-4" />
    </svg>
  );
}

/** Venue and nightclub door security */
export function DoorSecurityIcon(props: ServiceIconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M18 20V7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v13" />
      <path d="M2 20h20" />
      <path d="M15 12h.01" />
    </svg>
  );
}

/** Event security */
export function EventSecurityIcon(props: ServiceIconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

/** Crowd control */
export function CrowdControlIcon(props: ServiceIconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/** Corporate security */
export function CorporateSecurityIcon(props: ServiceIconProps) {
  return (
    <svg {...iconProps(props)}>
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  );
}

/** 24/7 availability */
export function AvailabilityIcon(props: ServiceIconProps) {
  return (
    <svg {...iconProps(props)}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
