# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-01 |  |  |  |  |
| 8.0 | 2026-05-02 | 2454<sub>(+116) | 2808<sub>(+127) | 2919<sub>(+118) |  |
| 7.0 | 2026-04-25 | 2338<sub>(+34) | 2681<sub>(+65) | 2801<sub>(+39) |  |
| 6.0 | 2026-04-20 | 2304<sub>(+318) | 2616<sub>(+217) | 2762<sub>(+215) |  |
| 5.0 | 2026-04-15 | 1986<sub>(+47) | 2399<sub>(+171) | 2547<sub>(+159) |  |
| 4.0 | 2026-04-11 | 1939<sub>(+222) | 2228<sub>(+167) | 2388<sub>(+178) |  |
| 3.0 | 2026-04-09 | 1717<sub>(+592) | 2061<sub>(+722) | 2210<sub>(+645) |  |
| 2.0 | 2026-04-08 | 1125<sub>(+393) | 1339<sub>(+532) | 1565<sub>(+656) |  |
| 1.0 | 2026-04-06 | 732 | 807 | 909 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pea+<version>&body=###%20Engine%20name%0APea%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-07 06:26:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"]
  y-axis "Elo Rating" 700 --> 3000
  line "STC (8.0+0.08s)" [732, 1125, 1717, 1939, 1986, 2304, 2338, 2454]
  line "STC (8.0+0.08s)" [732, 1125, 1717, 1939, 1986, 2304, 2338, 2454]
  line "LTC (60.0+0.60s)" [807, 1339, 2061, 2228, 2399, 2616, 2681, 2808]
  line "VLTC (2m24s+1.12s)" [909, 1565, 2210, 2388, 2547, 2762, 2801, 2919]
  line "VLTC (2m24s+1.12s)" [909, 1565, 2210, 2388, 2547, 2762, 2801, 2919]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2919 | 30 | 358 | 49% | 2927 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2808 | 32 | 302 | 50% | 2807 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2454 | 31 | 356 | 52% | 2426 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2801 | 34 | 270 | 52% | 2785 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2681 | 35 | 266 | 50% | 2684 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2338 | 33 | 320 | 48% | 2363 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2762 | 36 | 248 | 52% | 2745 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2616 | 36 | 274 | 51% | 2606 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2304 | 32 | 344 | 54% | 2265 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2547 | 33 | 324 | 49% | 2560 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2399 | 36 | 268 | 50% | 2398 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1986 | 36 | 276 | 50% | 1986 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2388 | 34 | 310 | 54% | 2349 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2228 | 36 | 272 | 49% | 2238 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1939 | 39 | 248 | 52% | 1921 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2210 | 40 | 232 | 51% | 2206 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2061 | 39 | 246 | 48% | 2082 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1717 | 43 | 208 | 47% | 1750 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1565 | 34 | 316 | 48% | 1594 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1339 | 39 | 258 | 46% | 1395 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1125 | 35 | 300 | 51% | 1098 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 909 | 79 | 110 | 38% | 1071 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 807 | 84 | 104 | 37% | 1026 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 732 | 90 | 92 | 38% | 938 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |