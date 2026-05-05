# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2969<sub>(+new) | 3189<sub>(+new) | 3220<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2990<sub>(+new) | 3217<sub>(+new) | 3239<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2963<sub>(+86) | 3159<sub>(+99) | 3213<sub>(+67) |  |
| 3.1 | 2025-11-28 | 2877<sub>(+73) | 3060<sub>(+72) | 3146<sub>(+134) |  |
| 3.0 | 2025-11-26 | 2804<sub>(+535) | 2988<sub>(+530) | 3012<sub>(+481) |  |
| 2.1 | 2025-10-13 | 2269<sub>(+new) | 2458<sub>(+new) | 2531<sub>(+new) |  |
| 1,4.1 | 2025-10-10 |  |  |  |  |
| 1,3,1 | 2025-09-13 |  |  |  |  |
| 1,2 | 2025-09-08 |  |  |  |  |
| 1.0 | 2025-08-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A3.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-05 06:26:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2269, 2804, 2877, 2963, 2990, 2969]
  line "STC (8.0+0.08s)" [2269, 2804, 2877, 2963, 2990, 2969]
  line "LTC (60.0+0.60s)" [2458, 2988, 3060, 3159, 3217, 3189]
  line "VLTC (2m24s+1.12s)" [2531, 3012, 3146, 3213, 3239, 3220]
  line "VLTC (2m24s+1.12s)" [2531, 3012, 3146, 3213, 3239, 3220]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3220 | 35 | 228 | 52% | 3204 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3189 | 42 | 158 | 53% | 3170 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2969 | 41 | 170 | 49% | 2979 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3239 | 104 | 24 | 58% | 3175 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3217 | 102 | 24 | 54% | 3181 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2990 | 110 | 24 | 50% | 2994 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3213 | 35 | 226 | 49% | 3224 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3159 | 33 | 260 | 52% | 3143 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2963 | 33 | 264 | 50% | 2965 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3146 | 35 | 232 | 51% | 3137 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3060 | 36 | 212 | 52% | 3042 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2877 | 37 | 224 | 48% | 2896 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3012 | 51 | 128 | 57% | 2935 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2988 | 43 | 184 | 59% | 2898 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2804 | 56 | 108 | 53% | 2761 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2531 | 57 | 110 | 48% | 2561 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2458 | 58 | 108 | 48% | 2479 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2269 | 62 | 88 | 51% | 2263 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |