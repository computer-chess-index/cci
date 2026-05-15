# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-02-13 |  |  |  |  |
| 2 | 2026-02-13 |  |  |  |  |
| 10 | 2026-01-17 | 2916<sub>(+254) | 3131<sub>(+179) | 3166<sub>(+116) |  |
| 9 | 2026-01-10 | 2662<sub>(+17) | 2952<sub>(-14) | 3050<sub>(-33) |  |
| 8 | 2025-09-25 | 2645<sub>(+new) | 2966<sub>(+new) | 3083<sub>(+new) |  |
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

Generated: 2026-05-15 06:25:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2645, 2662, 2916]
  line "STC (8.0+0.08s)" [2645, 2662, 2916]
  line "LTC (60.0+0.60s)" [2966, 2952, 3131]
  line "VLTC (2m24s+1.12s)" [3083, 3050, 3166]
  line "VLTC (2m24s+1.12s)" [3083, 3050, 3166]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3166 | 27 | 394 | 50% | 3162 | 52% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3131 | 28 | 380 | 52% | 3105 | 49% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2916 | 24 | 528 | 48% | 2932 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3050 | 36 | 216 | 51% | 3040 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2952 | 40 | 182 | 48% | 2970 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2662 | 49 | 128 | 50% | 2664 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3083 | 38 | 198 | 51% | 3074 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2966 | 37 | 208 | 52% | 2947 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2645 | 43 | 176 | 51% | 2635 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |