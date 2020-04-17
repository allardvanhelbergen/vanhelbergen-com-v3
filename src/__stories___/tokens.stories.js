import React from 'react'
import tw from 'twin.macro'

export const AllTailwindConfig = () => (
  <>
    <Colors />
    <Typography />
    <Spacing />
    <Borders />
    <BoxShadows />
  </>
)

export const Colors = () => {
  const Box = tw.div`inline-block h-8 w-8 border`
  // const colorNames = [
  //   'gray',
  //   'red',
  //   'orange',
  //   'yellow',
  //   'green',
  //   'teal',
  //   'blue',
  //   'indigo',
  //   'purple',
  //   'pink',
  // ]
  // const colorNumbers = [100, 200, 300, 400, 500, 600, 700, 800, 900]

  return (
    <section>
      {/* {colorNames.map(name => {
        return (
          <div>
            {colorNumbers.map(number => {
              const tailwindClass = `bg-${name}-${number}`
              const Box = tw.div`inline-block h-8 w-8 border border-black bg-white ${tailwindClass}`
              console.log(`<Box className="${tailwindClass}" />`)
              return <Box key={tailwindClass} />
            })}
          </div>
        )
      })} */}
      <Box className="bg-gray-100" />
      <Box className="bg-gray-200" />
      <Box className="bg-gray-300" />
      <Box className="bg-gray-400" />
      <Box className="bg-gray-500" />
      <Box className="bg-gray-600" />
      <Box className="bg-gray-700" />
      <Box className="bg-gray-800" />
      <Box className="bg-gray-900" />
      <br />
      <Box className="bg-red-100" />
      <Box className="bg-red-200" />
      <Box className="bg-red-300" />
      <Box className="bg-red-400" />
      <Box className="bg-red-500" />
      <Box className="bg-red-600" />
      <Box className="bg-red-700" />
      <Box className="bg-red-800" />
      <Box className="bg-red-900" />
      <br />
      <Box className="bg-orange-100" />
      <Box className="bg-orange-200" />
      <Box className="bg-orange-300" />
      <Box className="bg-orange-400" />
      <Box className="bg-orange-500" />
      <Box className="bg-orange-600" />
      <Box className="bg-orange-700" />
      <Box className="bg-orange-800" />
      <Box className="bg-orange-900" />
      <br />
      <Box className="bg-yellow-100" />
      <Box className="bg-yellow-200" />
      <Box className="bg-yellow-300" />
      <Box className="bg-yellow-400" />
      <Box className="bg-yellow-500" />
      <Box className="bg-yellow-600" />
      <Box className="bg-yellow-700" />
      <Box className="bg-yellow-800" />
      <Box className="bg-yellow-900" />
      <br />
      <Box className="bg-green-100" />
      <Box className="bg-green-200" />
      <Box className="bg-green-300" />
      <Box className="bg-green-400" />
      <Box className="bg-green-500" />
      <Box className="bg-green-600" />
      <Box className="bg-green-700" />
      <Box className="bg-green-800" />
      <Box className="bg-green-900" />
      <br />
      <Box className="bg-teal-100" />
      <Box className="bg-teal-200" />
      <Box className="bg-teal-300" />
      <Box className="bg-teal-400" />
      <Box className="bg-teal-500" />
      <Box className="bg-teal-600" />
      <Box className="bg-teal-700" />
      <Box className="bg-teal-800" />
      <Box className="bg-teal-900" />
      <br />
      <Box className="bg-blue-100" />
      <Box className="bg-blue-200" />
      <Box className="bg-blue-300" />
      <Box className="bg-blue-400" />
      <Box className="bg-blue-500" />
      <Box className="bg-blue-600" />
      <Box className="bg-blue-700" />
      <Box className="bg-blue-800" />
      <Box className="bg-blue-900" />
      <br />
      <Box className="bg-indigo-100" />
      <Box className="bg-indigo-200" />
      <Box className="bg-indigo-300" />
      <Box className="bg-indigo-400" />
      <Box className="bg-indigo-500" />
      <Box className="bg-indigo-600" />
      <Box className="bg-indigo-700" />
      <Box className="bg-indigo-800" />
      <Box className="bg-indigo-900" />
      <br />
      <Box className="bg-purple-100" />
      <Box className="bg-purple-200" />
      <Box className="bg-purple-300" />
      <Box className="bg-purple-400" />
      <Box className="bg-purple-500" />
      <Box className="bg-purple-600" />
      <Box className="bg-purple-700" />
      <Box className="bg-purple-800" />
      <Box className="bg-purple-900" />
      <br />
      <Box className="bg-pink-100" />
      <Box className="bg-pink-200" />
      <Box className="bg-pink-300" />
      <Box className="bg-pink-400" />
      <Box className="bg-pink-500" />
      <Box className="bg-pink-600" />
      <Box className="bg-pink-700" />
      <Box className="bg-pink-800" />
      <Box className="bg-pink-900" />
    </section>
  )
}

export const Typography = () => {
  return (
    <section>
      <p className="font-sans">This is the sans serif font.</p>
      <p className="font-sans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare
        consectetur tellus, vel laoreet eros pulvinar at. Praesent congue massa
        quis massa pellentesque, sit amet aliquet magna gravida. Integer
        porttitor efficitur lorem, a tempor nibh semper eu. Fusce eleifend
        libero ipsum, pellentesque tristique nulla viverra volutpat.
      </p>
      <p>&nbsp;</p>
      <p className="font-serif">This is the serif font.</p>
      <p className="font-serif">
        Praesent imperdiet, tortor lacinia luctus tristique, massa quam bibendum
        metus, quis ornare urna leo id tellus. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Nulla
        nec tincidunt nisi. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Donec laoreet laoreet
        lacinia. Vestibulum mattis finibus suscipit.
      </p>
      <p>&nbsp;</p>
      <p className="font-mono">This is the mono-spaced font.</p>
      <p className="font-mono">
        In mattis laoreet tortor, eu commodo risus interdum eget. Maecenas
        condimentum ullamcorper tempus. Integer sit amet aliquam nisl. Donec
        imperdiet posuere arcu quis rhoncus. Sed venenatis a ipsum in tincidunt.
        Curabitur at ante in dolor dignissim sollicitudin.
      </p>
      <p>&nbsp;</p>
      <p className="text-xs">extra small</p>
      <p className="text-sm">small</p>
      <p className="text-base">base</p>
      <p className="text-lg">large</p>
      <p className="text-xl">extra large</p>
      <p className="text-2xl">2 extra large</p>
      <p className="text-3xl">3 extra large</p>
      <p className="text-4xl">4 extra large</p>
      <p className="text-5xl">5 extra large</p>
      <p className="text-6xl">6 extra large</p>
    </section>
  )
}

export const Spacing = () => {
  const Box = tw.div`h-8 bg-gray-800`
  return (
    <section>
      <p>Fixed width</p>
      <Box className="w-0" />
      <Box className="w-1" />
      <Box className="w-2" />
      <Box className="w-3" />
      <Box className="w-4" />
      <Box className="w-5" />
      <Box className="w-6" />
      <Box className="w-8" />
      <Box className="w-10" />
      <Box className="w-12" />
      <Box className="w-16" />
      <Box className="w-20" />
      <Box className="w-24" />
      <Box className="w-32" />
      <Box className="w-40" />
      <Box className="w-48" />
      <Box className="w-56" />
      <Box className="w-64" />
      <p>Percentages</p>
      <Box className="w-1/4" />
      <Box className="w-2/4" />
      <Box className="w-3/4" />
      <Box className="w-1/5" />
      <Box className="w-2/5" />
      <Box className="w-3/5" />
      <Box className="w-4/5" />
      <Box className="w-1/6" />
      <Box className="w-2/6" />
      <Box className="w-3/6" />
      <Box className="w-4/6" />
      <Box className="w-5/6" />
      <Box className="w-1/12" />
      <Box className="w-2/12" />
      <Box className="w-3/12" />
      <Box className="w-4/12" />
      <Box className="w-5/12" />
      <Box className="w-6/12" />
      <Box className="w-7/12" />
      <Box className="w-8/12" />
      <Box className="w-9/12" />
      <Box className="w-10/12" />
      <Box className="w-11/12" />
      <Box className="w-full" />
    </section>
  )
}

export const Borders = () => {
  const Box = tw.div`h-16 w-16 m-4`
  return (
    <section>
      <p>Border width</p>
      <Box className="bg-gray-200 border-gray-800 border-0" />
      <Box className="bg-gray-200 border-gray-800 border" />
      <Box className="bg-gray-200 border-gray-800 border-2" />
      <Box className="bg-gray-200 border-gray-800 border-4" />
      <Box className="bg-gray-200 border-gray-800 border-8" />

      <p>Border radius</p>
      <Box className="bg-gray-800 rounded-none" />
      <Box className="bg-gray-800 rounded-sm" />
      <Box className="bg-gray-800 rounded" />
      <Box className="bg-gray-800 rounded-md" />
      <Box className="bg-gray-800 rounded-lg" />
      <Box className="bg-gray-800 rounded-full" />
    </section>
  )
}

export const BoxShadows = () => {
  const Box = tw.div`h-16 w-16 m-4 bg-gray-200`
  return (
    <section>
      <Box className="shadow-xs" />
      <Box className="shadow-sm" />
      <Box className="shadow" />
      <Box className="shadow-md" />
      <Box className="shadow-lg" />
      <Box className="shadow-xl" />
      <Box className="shadow-2xl" />
      <Box className="shadow-inner" />
      <Box className="shadow-outline" />
    </section>
  )
}

export default {
  title: 'Tokens',
}
