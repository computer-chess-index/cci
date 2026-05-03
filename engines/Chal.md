# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2358<sub>(+48) | 2600<sub>(+58) | 2688<sub>(+54) |  |
| 1.4.0 | 2026-04-01 | 2310<sub>(+222) | 2542<sub>(+132) | 2634<sub>(+199) |  |
| 1.3.2 | 2026-03-14 | 2088<sub>(+31) | 2410<sub>(+26) | 2435<sub>(+2) |  |
| 1.3.1 | 2026-03-10 | 2057<sub>(+158) | 2384<sub>(+116) | 2433<sub>(+138) |  |
| 1.3.0 | 2026-03-08 | 1899<sub>(+195) | 2268<sub>(+320) | 2295<sub>(+247) |  |
| 1.2.1 | 2026-03-07 | 1704<sub>(+new) | 1948<sub>(+new) | 2048<sub>(+new) |  |
| 1.2.0 | 2026-03-05 |  |  |  |  |
| 1.1.0 | 2026-03-05 |  |  |  |  |
| 1.0.0 | 2026-03-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chal+<version>&body=###%20Engine%20name%0AChal%0A%0A###%20Version%0A1.4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-03 08:14:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1700 --> 2700
  line "STC (8.0+0.08s)" [1704, 1899, 2057, 2088, 2310, 2358]
  line "STC (8.0+0.08s)" [1704, 1899, 2057, 2088, 2310, 2358]
  line "LTC (60.0+0.60s)" [1948, 2268, 2384, 2410, 2542, 2600]
  line "VLTC (2m24s+1.12s)" [2048, 2295, 2433, 2435, 2634, 2688]
  line "VLTC (2m24s+1.12s)" [2048, 2295, 2433, 2435, 2634, 2688]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2688 | 35 | 252 | 51% | 2677 | 37% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2600 | 34 | 276 | 50% | 2600 | 36% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2358 | 36 | 256 | 51% | 2352 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2634 | 30 | 360 | 50% | 2633 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2542 | 32 | 320 | 49% | 2547 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2310 | 31 | 360 | 52% | 2292 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2435 | 34 | 296 | 49% | 2445 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2410 | 32 | 312 | 51% | 2404 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2088 | 32 | 320 | 48% | 2107 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2433 | 37 | 244 | 51% | 2419 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2384 | 37 | 240 | 51% | 2376 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2057 | 40 | 212 | 52% | 2043 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2295 | 44 | 188 | 54% | 2260 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2268 | 41 | 204 | 55% | 2225 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1899 | 42 | 196 | 50% | 1898 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2048 | 39 | 254 | 50% | 2057 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1948 | 45 | 192 | 46% | 2020 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1704 | 44 | 200 | 47% | 1778 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |