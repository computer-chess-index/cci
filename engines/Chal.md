# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2280<sub>(+24) | 2560<sub>(+73) | 2643<sub>(+64) |  |
| 1.4.0 | 2026-04-01 | 2256<sub>(+213) | 2487<sub>(+133) | 2579<sub>(+199) |  |
| 1.3.2 | 2026-03-14 | 2043<sub>(+29) | 2354<sub>(+25) | 2380<sub>(+3) |  |
| 1.3.1 | 2026-03-10 | 2014<sub>(+152) | 2329<sub>(+111) | 2377<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1862<sub>(+185) | 2218<sub>(+309) | 2242<sub>(+236) |  |
| 1.2.1 | 2026-03-07 | 1677 | 1909 | 2006 |  |
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

Generated: 2026-08-21 06:23:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1677, 1862, 2014, 2043, 2256, 2280]
  line "STC (8.0+0.08s)" [1677, 1862, 2014, 2043, 2256, 2280]
  line "LTC (60.0+0.60s)" [1909, 2218, 2329, 2354, 2487, 2560]
  line "VLTC (2m24s+1.12s)" [2006, 2242, 2377, 2380, 2579, 2643]
  line "VLTC (2m24s+1.12s)" [2006, 2242, 2377, 2380, 2579, 2643]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2643 | 26 | 478 | 52% | 2626 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2560 | 26 | 482 | 50% | 2560 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2280 | 27 | 460 | 48% | 2307 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2579 | 30 | 360 | 50% | 2576 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2487 | 32 | 320 | 49% | 2491 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2256 | 31 | 360 | 52% | 2238 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2380 | 34 | 296 | 49% | 2390 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2354 | 32 | 312 | 51% | 2349 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2043 | 32 | 320 | 48% | 2061 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2377 | 37 | 244 | 51% | 2364 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2329 | 37 | 240 | 51% | 2321 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2014 | 40 | 212 | 52% | 1999 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2242 | 44 | 188 | 54% | 2209 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2218 | 41 | 204 | 55% | 2175 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1862 | 42 | 196 | 50% | 1862 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2006 | 39 | 254 | 50% | 2016 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1909 | 45 | 192 | 46% | 1979 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1677 | 44 | 200 | 47% | 1750 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |