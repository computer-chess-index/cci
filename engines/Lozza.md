# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2844<sub>(+238) | 3075<sub>(+175) | 3121<sub>(+125) |  |
| 9 | 2026-01-10 | 2606<sub>(+17) | 2900<sub>(-13) | 2996<sub>(-33) |  |
| 8 | 2025-09-25 | 2589 | 2913 | 3029 |  |
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

Generated: 2026-08-24 06:26:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2589, 2606, 2844]
  line "STC (8.0+0.08s)" [2589, 2606, 2844]
  line "LTC (60.0+0.60s)" [2913, 2900, 3075]
  line "VLTC (2m24s+1.12s)" [3029, 2996, 3121]
  line "VLTC (2m24s+1.12s)" [3029, 2996, 3121]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3121 | 25 | 476 | 51% | 3109 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3075 | 24 | 488 | 51% | 3056 | 52% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2844 | 21 | 716 | 47% | 2862 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2996 | 36 | 216 | 51% | 2986 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2900 | 40 | 182 | 48% | 2917 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2606 | 49 | 128 | 50% | 2608 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3029 | 38 | 198 | 51% | 3020 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2913 | 37 | 208 | 52% | 2894 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2589 | 43 | 176 | 51% | 2579 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |