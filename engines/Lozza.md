# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2836<sub>(+237) | 3067<sub>(+175) | 3113<sub>(+125) |  |
| 9 | 2026-01-10 | 2599<sub>(+18) | 2892<sub>(-13) | 2988<sub>(-33) |  |
| 8 | 2025-09-25 | 2581 | 2905 | 3021 |  |
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

Generated: 2026-08-17 06:26:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2581, 2599, 2836]
  line "STC (8.0+0.08s)" [2581, 2599, 2836]
  line "LTC (60.0+0.60s)" [2905, 2892, 3067]
  line "VLTC (2m24s+1.12s)" [3021, 2988, 3113]
  line "VLTC (2m24s+1.12s)" [3021, 2988, 3113]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3113 | 25 | 468 | 51% | 3101 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3067 | 24 | 476 | 51% | 3048 | 51% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2836 | 21 | 712 | 47% | 2855 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2988 | 36 | 216 | 51% | 2978 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2892 | 40 | 182 | 48% | 2909 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2599 | 49 | 128 | 50% | 2600 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3021 | 38 | 198 | 51% | 3012 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2905 | 37 | 208 | 52% | 2886 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2581 | 43 | 176 | 51% | 2572 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |