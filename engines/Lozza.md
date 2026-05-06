# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-02-13 |  |  |  |  |
| 2 | 2026-02-13 |  |  |  |  |
| 10 | 2026-01-17 | 2915<sub>(+254) | 3128<sub>(+178) | 3163<sub>(+115) |  |
| 9 | 2026-01-10 | 2661<sub>(+18) | 2950<sub>(-15) | 3048<sub>(-33) |  |
| 8 | 2025-09-25 | 2643<sub>(+new) | 2965<sub>(+new) | 3081<sub>(+new) |  |
| 7 | 2025-07-12 |  |  |  |  |
| 5.1 | 2025-06-02 |  |  |  |  |
| 5 | 2025-02-25 |  |  |  |  |
| 4 | 2025-01-06 |  |  |  |  |
| 3 | 2024-10-06 |  |  |  |  |
| 2.5 | 2023-02-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-06 06:25:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2643, 2661, 2915]
  line "STC (8.0+0.08s)" [2643, 2661, 2915]
  line "LTC (60.0+0.60s)" [2965, 2950, 3128]
  line "VLTC (2m24s+1.12s)" [3081, 3048, 3163]
  line "VLTC (2m24s+1.12s)" [3081, 3048, 3163]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 27 | 390 | 50% | 3160 | 52% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3128 | 28 | 368 | 52% | 3102 | 49% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2915 | 24 | 524 | 48% | 2930 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3048 | 36 | 216 | 51% | 3038 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2950 | 40 | 182 | 48% | 2967 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2661 | 49 | 128 | 50% | 2662 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3081 | 38 | 198 | 51% | 3071 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2965 | 37 | 208 | 52% | 2946 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2643 | 43 | 176 | 51% | 2634 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |