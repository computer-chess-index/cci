# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-05-02 | 2457<sub>(+104) | 2828<sub>(+132) | 2946<sub>(+129) |  |
| 7.0 | 2026-04-25 | 2353<sub>(+32) | 2696<sub>(+65) | 2817<sub>(+40) |  |
| 6.0 | 2026-04-20 | 2321<sub>(+319) | 2631<sub>(+217) | 2777<sub>(+215) |  |
| 5.0 | 2026-04-15 | 2002<sub>(+47) | 2414<sub>(+170) | 2562<sub>(+159) |  |
| 4.0 | 2026-04-11 | 1955<sub>(+222) | 2244<sub>(+165) | 2403<sub>(+177) |  |
| 3.0 | 2026-04-09 | 1733<sub>(+604) | 2079<sub>(+728) | 2226<sub>(+648) |  |
| 2.0 | 2026-04-08 | 1129<sub>(+391) | 1351<sub>(+534) | 1578<sub>(+659) |  |
| 1.0 | 2026-04-06 | 738 | 817 | 919 |  |
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

Generated: 2026-05-19 06:27:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"]
  y-axis "Elo Rating" 700 --> 3000
  line "STC (8.0+0.08s)" [738, 1129, 1733, 1955, 2002, 2321, 2353, 2457]
  line "STC (8.0+0.08s)" [738, 1129, 1733, 1955, 2002, 2321, 2353, 2457]
  line "LTC (60.0+0.60s)" [817, 1351, 2079, 2244, 2414, 2631, 2696, 2828]
  line "VLTC (2m24s+1.12s)" [919, 1578, 2226, 2403, 2562, 2777, 2817, 2946]
  line "VLTC (2m24s+1.12s)" [919, 1578, 2226, 2403, 2562, 2777, 2817, 2946]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2946 | 32 | 306 | 50% | 2950 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2828 | 34 | 282 | 51% | 2822 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2457 | 33 | 316 | 51% | 2445 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2817 | 34 | 270 | 52% | 2801 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2696 | 35 | 266 | 50% | 2699 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2353 | 33 | 320 | 48% | 2377 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2777 | 36 | 248 | 52% | 2761 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2631 | 36 | 274 | 51% | 2620 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2321 | 32 | 344 | 54% | 2282 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2562 | 33 | 324 | 49% | 2574 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2414 | 36 | 268 | 50% | 2412 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2002 | 36 | 276 | 50% | 2002 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2403 | 34 | 310 | 54% | 2364 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2244 | 36 | 272 | 49% | 2255 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1955 | 39 | 248 | 52% | 1937 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2226 | 40 | 232 | 51% | 2222 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2079 | 39 | 246 | 48% | 2099 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1733 | 43 | 208 | 47% | 1764 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1578 | 34 | 316 | 48% | 1608 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1351 | 39 | 258 | 46% | 1407 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1129 | 35 | 300 | 51% | 1102 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 919 | 80 | 110 | 38% | 1080 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 817 | 85 | 104 | 37% | 1035 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 738 | 91 | 92 | 38% | 948 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |