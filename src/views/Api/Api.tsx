import { adminBounds } from "../../models/adminBoundaries"

export const Api = () => {
    return <div style={{padding: '1em', textAlign: 'left'}}>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <p>You can get raw fallen data in JSON from <a href='https://api.heroesofmyanmar.com' target='_blank'>https://api.heroesofmyanmar.com</a>.</p>
        <p>If you have any suggestions or processing needs, let us know how we could help via the form.</p>
        <div>
            <h1>API Reference (WIP)</h1>
            <ol>
                <li>
                    <h2>Cause of death column</h2>
                    <p>Comma-separated labels: means,wounds,criminals.</p>
                    <p>Multiple types under a label are hyphen-separated.</p>
                    <code>Examples:
                        <ol>
                            <li>Gun,head,police-military</li>
                            <li>Gun-fire,chest-burn</li>
                            <li>Gun,thigh,bleeding</li>
                            <li>Knife,neck,usdp supporters</li>
                            <li>Vehicle,na,na</li>
                            <li>gun-baton,head-back,police</li>
                        </ol>
                    </code>
                </li>
                <li>
                    <h2>Administrative boundaries to populate state/region from city</h2>
                    <pre>{JSON.stringify(adminBounds, null, 2)}</pre>
                </li>
            </ol>
        </div>
    </div>
}