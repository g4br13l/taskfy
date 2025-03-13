


type EnabledViewPropsT = {
  enabled: boolean
}

export function EnabledView({ enabled }: EnabledViewPropsT) {

  return(

    <div className="w-fit">
      {enabled ? (
        <p className="text-indigo-400"> On </p>
      ) : (
        <p className="text-neutral-500"> Off </p>
      )}
    </div>

  )
}
