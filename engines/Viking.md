# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1980<sub>(+622) | 2249<sub>(+385) | 2402<sub>(+234) |  |
| R4 | 2026-04-22 | 1358<sub>(+new) | 1864<sub>(+new) | 2168<sub>(+new) |  |
| R3 | 2026-04-22 |  |  |  |  |
| R2 | 2025-09-25 |  |  |  |  |
| R1 | 2025-09-24 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Viking+<version>&body=###%20Engine%20name%0AViking%0A%0A###%20Version%0AR5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-12 06:30:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2500
  line "STC (8.0+0.08s)" [1358, 1980]
  line "STC (8.0+0.08s)" [1358, 1980]
  line "LTC (60.0+0.60s)" [1864, 2249]
  line "VLTC (2m24s+1.12s)" [2168, 2402]
  line "VLTC (2m24s+1.12s)" [2168, 2402]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | 2402 | 31 | 334 | 50% | 2404 | 36% |
| R5 | LTC <sub>(60.0+0.60s)</sub> | 2249 | 32 | 328 | 53% | 2215 | 29% |
| R5 | STC <sub>(8.0+0.08s)</sub> | 1980 | 32 | 364 | 53% | 1953 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | 2168 | 31 | 372 | 41% | 2279 | 28% |
| R4 | LTC <sub>(60.0+0.60s)</sub> | 1864 | 36 | 298 | 46% | 1935 | 23% |
| R4 | STC <sub>(8.0+0.08s)</sub> | 1358 | 38 | 288 | 47% | 1424 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |