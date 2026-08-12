# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2838<sub>(+241) | 3066<sub>(+176) | 3109<sub>(+123) |  |
| 9 | 2026-01-10 | 2597<sub>(+16) | 2890<sub>(-14) | 2986<sub>(-34) |  |
| 8 | 2025-09-25 | 2581 | 2904 | 3020 |  |
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

Generated: 2026-08-12 07:58:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2581, 2597, 2838]
  line "STC (8.0+0.08s)" [2581, 2597, 2838]
  line "LTC (60.0+0.60s)" [2904, 2890, 3066]
  line "VLTC (2m24s+1.12s)" [3020, 2986, 3109]
  line "VLTC (2m24s+1.12s)" [3020, 2986, 3109]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3109 | 25 | 464 | 51% | 3100 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3066 | 25 | 472 | 51% | 3047 | 51% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2838 | 21 | 704 | 47% | 2855 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2986 | 36 | 216 | 51% | 2977 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2890 | 40 | 182 | 48% | 2908 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2597 | 49 | 128 | 50% | 2599 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3020 | 38 | 198 | 51% | 3011 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2904 | 37 | 208 | 52% | 2885 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2581 | 43 | 176 | 51% | 2570 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |