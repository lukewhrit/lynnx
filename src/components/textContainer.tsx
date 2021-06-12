/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

export default function TextContainer({ children }: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className="flex justify-center py-8">
      <article className="prose prose-emerald">
        {children}
      </article>
    </div>
  );
}
