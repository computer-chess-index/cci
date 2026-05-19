# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2313<sub>(+42) | 2562<sub>(+62) | 2643<sub>(+51) |  |
| 1.4.0 | 2026-04-01 | 2271<sub>(+214) | 2500<sub>(+129) | 2592<sub>(+197) |  |
| 1.3.2 | 2026-03-14 | 2057<sub>(+27) | 2371<sub>(+26) | 2395<sub>(+1) |  |
| 1.3.1 | 2026-03-10 | 2030<sub>(+152) | 2345<sub>(+112) | 2394<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1878<sub>(+186) | 2233<sub>(+308) | 2259<sub>(+237) |  |
| 1.2.1 | 2026-03-07 | 1692<sub>(+new) | 1925<sub>(+new) | 2022<sub>(+new) |  |
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

Generated: 2026-05-19 06:23:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1692, 1878, 2030, 2057, 2271, 2313]
  line "STC (8.0+0.08s)" [1692, 1878, 2030, 2057, 2271, 2313]
  line "LTC (60.0+0.60s)" [1925, 2233, 2345, 2371, 2500, 2562]
  line "VLTC (2m24s+1.12s)" [2022, 2259, 2394, 2395, 2592, 2643]
  line "VLTC (2m24s+1.12s)" [2022, 2259, 2394, 2395, 2592, 2643]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2643 | 31 | 320 | 51% | 2635 | 36% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2562 | 31 | 338 | 50% | 2565 | 34% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2313 | 32 | 328 | 50% | 2313 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2592 | 30 | 360 | 50% | 2591 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2500 | 32 | 320 | 49% | 2506 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2271 | 31 | 360 | 52% | 2253 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2395 | 34 | 296 | 49% | 2404 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2371 | 32 | 312 | 51% | 2364 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2057 | 32 | 320 | 48% | 2076 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2394 | 37 | 244 | 51% | 2380 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2345 | 37 | 240 | 51% | 2337 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2030 | 40 | 212 | 52% | 2016 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2259 | 44 | 188 | 54% | 2225 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2233 | 41 | 204 | 55% | 2190 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1878 | 42 | 196 | 50% | 1878 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2022 | 39 | 254 | 50% | 2030 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1925 | 45 | 192 | 46% | 1994 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1692 | 44 | 200 | 47% | 1764 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |