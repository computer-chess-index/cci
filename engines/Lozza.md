# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2843<sub>(+237) | 3074<sub>(+176) | 3120<sub>(+124) |  |
| 9 | 2026-01-10 | 2606<sub>(+18) | 2898<sub>(-15) | 2996<sub>(-32) |  |
| 8 | 2025-09-25 | 2588 | 2913 | 3028 |  |
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

Generated: 2026-08-22 06:26:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2588, 2606, 2843]
  line "STC (8.0+0.08s)" [2588, 2606, 2843]
  line "LTC (60.0+0.60s)" [2913, 2898, 3074]
  line "VLTC (2m24s+1.12s)" [3028, 2996, 3120]
  line "VLTC (2m24s+1.12s)" [3028, 2996, 3120]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3120 | 25 | 476 | 51% | 3109 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3074 | 24 | 484 | 51% | 3055 | 51% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2843 | 21 | 712 | 47% | 2862 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2996 | 36 | 216 | 51% | 2985 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2898 | 40 | 182 | 48% | 2916 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2606 | 49 | 128 | 50% | 2607 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3028 | 38 | 198 | 51% | 3020 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2913 | 37 | 208 | 52% | 2894 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2588 | 43 | 176 | 51% | 2579 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |