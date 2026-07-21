# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2925<sub>(+29) | 3193<sub>(+39) | 3260<sub>(+15) |  |
| 2.0.0 | 2026-05-11 | 2896<sub>(+103) | 3154<sub>(+87) | 3245<sub>(+81) |  |
| 1.1.0 | 2026-02-28 | 2793<sub>(+352) | 3067<sub>(+360) | 3164<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2441<sub>(+128) | 2707<sub>(+38) | 2844<sub>(+102) |  |
| 1.0.3 | 2026-01-04 | 2313<sub>(+26) | 2669<sub>(+115) | 2742<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2287<sub>(+28) | 2554<sub>(+20) | 2669<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2259<sub>(+37) | 2534<sub>(-13) | 2722<sub>(-52) |  |
| 1.0.0 | 2025-12-05 | 2222 | 2547 | 2774 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-21 06:25:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2222, 2259, 2287, 2313, 2441, 2793, 2896, 2925]
  line "STC (8.0+0.08s)" [2222, 2259, 2287, 2313, 2441, 2793, 2896, 2925]
  line "LTC (60.0+0.60s)" [2547, 2534, 2554, 2669, 2707, 3067, 3154, 3193]
  line "VLTC (2m24s+1.12s)" [2774, 2722, 2669, 2742, 2844, 3164, 3245, 3260]
  line "VLTC (2m24s+1.12s)" [2774, 2722, 2669, 2742, 2844, 3164, 3245, 3260]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3260 | 29 | 324 | 51% | 3249 | 58% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3193 | 28 | 352 | 51% | 3187 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2925 | 30 | 336 | 53% | 2903 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3245 | 29 | 316 | 51% | 3239 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3154 | 29 | 322 | 48% | 3166 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2896 | 29 | 352 | 52% | 2876 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3164 | 27 | 392 | 53% | 3144 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3067 | 28 | 356 | 51% | 3054 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2793 | 28 | 398 | 51% | 2784 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2844 | 34 | 272 | 49% | 2851 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2707 | 35 | 252 | 50% | 2709 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2441 | 31 | 348 | 55% | 2396 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2742 | 43 | 172 | 50% | 2746 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2669 | 45 | 160 | 51% | 2664 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2313 | 44 | 172 | 51% | 2306 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2669 | 38 | 214 | 50% | 2669 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2554 | 35 | 264 | 46% | 2592 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2287 | 41 | 212 | 55% | 2242 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2722 | 42 | 180 | 52% | 2707 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2534 | 40 | 202 | 53% | 2507 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2259 | 50 | 142 | 48% | 2277 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2774 | 61 | 92 | 42% | 2844 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2547 | 59 | 92 | 46% | 2583 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2222 | 67 | 82 | 59% | 2138 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |