# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2970<sub>(+new) | 3190<sub>(+new) | 3221<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2993<sub>(+new) | 3218<sub>(+new) | 3240<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2965<sub>(+87) | 3160<sub>(+98) | 3214<sub>(+67) |  |
| 3.1 | 2025-11-28 | 2878<sub>(+73) | 3062<sub>(+73) | 3147<sub>(+134) |  |
| 3.0 | 2025-11-26 | 2805<sub>(+536) | 2989<sub>(+529) | 3013<sub>(+482) |  |
| 2.1 | 2025-10-13 | 2269<sub>(+new) | 2460<sub>(+new) | 2531<sub>(+new) |  |
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

Generated: 2026-05-07 06:26:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2269, 2805, 2878, 2965, 2993, 2970]
  line "STC (8.0+0.08s)" [2269, 2805, 2878, 2965, 2993, 2970]
  line "LTC (60.0+0.60s)" [2460, 2989, 3062, 3160, 3218, 3190]
  line "VLTC (2m24s+1.12s)" [2531, 3013, 3147, 3214, 3240, 3221]
  line "VLTC (2m24s+1.12s)" [2531, 3013, 3147, 3214, 3240, 3221]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3221 | 35 | 228 | 52% | 3205 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 42 | 158 | 53% | 3171 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2970 | 41 | 170 | 49% | 2981 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3240 | 104 | 24 | 58% | 3177 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3218 | 102 | 24 | 54% | 3182 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2993 | 110 | 24 | 50% | 2996 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3214 | 35 | 226 | 49% | 3225 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3160 | 33 | 260 | 52% | 3144 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2965 | 33 | 264 | 50% | 2967 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3147 | 35 | 232 | 51% | 3140 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3062 | 36 | 212 | 52% | 3044 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2878 | 37 | 224 | 48% | 2897 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3013 | 51 | 128 | 57% | 2936 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2989 | 43 | 184 | 59% | 2900 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2805 | 56 | 108 | 53% | 2762 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2531 | 57 | 110 | 48% | 2562 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2460 | 58 | 108 | 48% | 2479 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2269 | 62 | 88 | 51% | 2263 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |