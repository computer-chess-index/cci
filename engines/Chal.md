# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2364<sub>(+54) | 2604<sub>(+61) | 2687<sub>(+52) |  |
| 1.4.0 | 2026-04-01 | 2310<sub>(+220) | 2543<sub>(+132) | 2635<sub>(+200) |  |
| 1.3.2 | 2026-03-14 | 2090<sub>(+30) | 2411<sub>(+26) | 2435<sub>(+1) |  |
| 1.3.1 | 2026-03-10 | 2060<sub>(+161) | 2385<sub>(+116) | 2434<sub>(+138) |  |
| 1.3.0 | 2026-03-08 | 1899<sub>(+194) | 2269<sub>(+320) | 2296<sub>(+247) |  |
| 1.2.1 | 2026-03-07 | 1705<sub>(+new) | 1949<sub>(+new) | 2049<sub>(+new) |  |
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

Generated: 2026-05-07 06:23:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1700 --> 2700
  line "STC (8.0+0.08s)" [1705, 1899, 2060, 2090, 2310, 2364]
  line "STC (8.0+0.08s)" [1705, 1899, 2060, 2090, 2310, 2364]
  line "LTC (60.0+0.60s)" [1949, 2269, 2385, 2411, 2543, 2604]
  line "VLTC (2m24s+1.12s)" [2049, 2296, 2434, 2435, 2635, 2687]
  line "VLTC (2m24s+1.12s)" [2049, 2296, 2434, 2435, 2635, 2687]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2687 | 33 | 296 | 50% | 2681 | 36% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2604 | 32 | 308 | 50% | 2607 | 35% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2364 | 34 | 300 | 51% | 2358 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2635 | 30 | 360 | 50% | 2634 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2543 | 32 | 320 | 49% | 2549 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2310 | 31 | 360 | 52% | 2292 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2435 | 34 | 296 | 49% | 2446 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2411 | 32 | 312 | 51% | 2404 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2090 | 32 | 320 | 48% | 2109 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2434 | 37 | 244 | 51% | 2421 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2385 | 37 | 240 | 51% | 2377 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2060 | 40 | 212 | 52% | 2044 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2296 | 44 | 188 | 54% | 2261 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2269 | 41 | 204 | 55% | 2226 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1899 | 42 | 196 | 50% | 1899 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2049 | 39 | 254 | 50% | 2059 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1949 | 45 | 192 | 46% | 2021 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1705 | 44 | 200 | 47% | 1779 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |