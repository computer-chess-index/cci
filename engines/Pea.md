# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-05-02 | 2444<sub>(+106) | 2809<sub>(+128) | 2919<sub>(+116) |  |
| 7.0 | 2026-04-25 | 2338<sub>(+34) | 2681<sub>(+65) | 2803<sub>(+41) |  |
| 6.0 | 2026-04-20 | 2304<sub>(+315) | 2616<sub>(+217) | 2762<sub>(+215) |  |
| 5.0 | 2026-04-15 | 1989<sub>(+48) | 2399<sub>(+170) | 2547<sub>(+159) |  |
| 4.0 | 2026-04-11 | 1941<sub>(+221) | 2229<sub>(+165) | 2388<sub>(+177) |  |
| 3.0 | 2026-04-09 | 1720<sub>(+591) | 2064<sub>(+721) | 2211<sub>(+644) |  |
| 2.0 | 2026-04-08 | 1129<sub>(+396) | 1343<sub>(+533) | 1567<sub>(+654) |  |
| 1.0 | 2026-04-06 | 733 | 810 | 913 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pea+<version>&body=###%20Engine%20name%0APea%0A%0A###%20Version%0A8.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-21 06:26:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"]
  y-axis "Elo Rating" 700 --> 3000
  line "STC (8.0+0.08s)" [733, 1129, 1720, 1941, 1989, 2304, 2338, 2444]
  line "STC (8.0+0.08s)" [733, 1129, 1720, 1941, 1989, 2304, 2338, 2444]
  line "LTC (60.0+0.60s)" [810, 1343, 2064, 2229, 2399, 2616, 2681, 2809]
  line "VLTC (2m24s+1.12s)" [913, 1567, 2211, 2388, 2547, 2762, 2803, 2919]
  line "VLTC (2m24s+1.12s)" [913, 1567, 2211, 2388, 2547, 2762, 2803, 2919]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2919 | 30 | 358 | 49% | 2927 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2809 | 32 | 302 | 50% | 2808 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2444 | 32 | 344 | 51% | 2426 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2803 | 34 | 270 | 52% | 2786 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2681 | 35 | 266 | 50% | 2684 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2338 | 33 | 320 | 48% | 2363 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2762 | 36 | 248 | 52% | 2746 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2616 | 36 | 274 | 51% | 2606 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2304 | 32 | 344 | 54% | 2267 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2547 | 33 | 324 | 49% | 2560 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2399 | 36 | 268 | 50% | 2398 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1989 | 36 | 276 | 50% | 1989 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2388 | 34 | 310 | 54% | 2349 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2229 | 36 | 272 | 49% | 2240 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1941 | 39 | 248 | 52% | 1924 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2211 | 40 | 232 | 51% | 2207 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2064 | 39 | 246 | 48% | 2084 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1720 | 43 | 208 | 47% | 1752 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1567 | 34 | 316 | 48% | 1597 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1343 | 39 | 258 | 46% | 1399 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1129 | 35 | 300 | 51% | 1100 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 913 | 80 | 110 | 38% | 1073 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 810 | 84 | 104 | 37% | 1027 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 733 | 91 | 92 | 38% | 941 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |