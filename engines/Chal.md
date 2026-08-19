# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2280<sub>(+25) | 2558<sub>(+73) | 2642<sub>(+65) |  |
| 1.4.0 | 2026-04-01 | 2255<sub>(+214) | 2485<sub>(+132) | 2577<sub>(+198) |  |
| 1.3.2 | 2026-03-14 | 2041<sub>(+27) | 2353<sub>(+26) | 2379<sub>(+3) |  |
| 1.3.1 | 2026-03-10 | 2014<sub>(+152) | 2327<sub>(+110) | 2376<sub>(+134) |  |
| 1.3.0 | 2026-03-08 | 1862<sub>(+185) | 2217<sub>(+309) | 2242<sub>(+237) |  |
| 1.2.1 | 2026-03-07 | 1677 | 1908 | 2005 |  |
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

Generated: 2026-08-19 06:23:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1677, 1862, 2014, 2041, 2255, 2280]
  line "STC (8.0+0.08s)" [1677, 1862, 2014, 2041, 2255, 2280]
  line "LTC (60.0+0.60s)" [1908, 2217, 2327, 2353, 2485, 2558]
  line "VLTC (2m24s+1.12s)" [2005, 2242, 2376, 2379, 2577, 2642]
  line "VLTC (2m24s+1.12s)" [2005, 2242, 2376, 2379, 2577, 2642]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2642 | 26 | 478 | 52% | 2624 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2558 | 26 | 482 | 50% | 2558 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2280 | 27 | 456 | 48% | 2306 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2577 | 30 | 360 | 50% | 2574 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2485 | 32 | 320 | 49% | 2491 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2255 | 31 | 360 | 52% | 2237 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2379 | 34 | 296 | 49% | 2388 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2353 | 32 | 312 | 51% | 2348 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2041 | 32 | 320 | 48% | 2060 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2376 | 37 | 244 | 51% | 2363 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2327 | 37 | 240 | 51% | 2319 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2014 | 40 | 212 | 52% | 1998 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2242 | 44 | 188 | 54% | 2207 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2217 | 41 | 204 | 55% | 2174 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1862 | 42 | 196 | 50% | 1862 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2005 | 39 | 254 | 50% | 2014 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1908 | 45 | 192 | 46% | 1978 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1677 | 44 | 200 | 47% | 1750 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |