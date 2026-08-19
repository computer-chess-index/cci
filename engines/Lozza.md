# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2842<sub>(+239) | 3073<sub>(+177) | 3117<sub>(+124) |  |
| 9 | 2026-01-10 | 2603<sub>(+18) | 2896<sub>(-15) | 2993<sub>(-34) |  |
| 8 | 2025-09-25 | 2585 | 2911 | 3027 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A10" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:26:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2585, 2603, 2842]
  line "STC (8.0+0.08s)" [2585, 2603, 2842]
  line "LTC (60.0+0.60s)" [2911, 2896, 3073]
  line "VLTC (2m24s+1.12s)" [3027, 2993, 3117]
  line "VLTC (2m24s+1.12s)" [3027, 2993, 3117]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3117 | 25 | 472 | 51% | 3106 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3073 | 24 | 484 | 51% | 3054 | 51% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2842 | 21 | 712 | 47% | 2861 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2993 | 36 | 216 | 51% | 2982 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2896 | 40 | 182 | 48% | 2913 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2603 | 49 | 128 | 50% | 2604 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3027 | 38 | 198 | 51% | 3017 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2911 | 37 | 208 | 52% | 2892 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2585 | 43 | 176 | 51% | 2576 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |