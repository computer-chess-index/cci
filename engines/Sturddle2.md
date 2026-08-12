# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2757<sub>(+72) | 3086<sub>(+74) | 3150<sub>(-1) |  |
| 2.5.0 | 2026-02-04 | 2685<sub>(+78) | 3012<sub>(+19) | 3151<sub>(+73) |  |
| 2.4.0 | 2025-12-06 | 2607 | 2993 | 3078 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sturddle2+<version>&body=###%20Engine%20name%0ASturddle2%0A%0A###%20Version%0A2.6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 08:15:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2607, 2685, 2757]
  line "STC (8.0+0.08s)" [2607, 2685, 2757]
  line "LTC (60.0+0.60s)" [2993, 3012, 3086]
  line "VLTC (2m24s+1.12s)" [3078, 3151, 3150]
  line "VLTC (2m24s+1.12s)" [3078, 3151, 3150]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3150 | 52 | 100 | 51% | 3139 | 54% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3086 | 59 | 80 | 53% | 3060 | 56% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2757 | 50 | 120 | 51% | 2745 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3151 | 23 | 514 | 52% | 3133 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3012 | 25 | 478 | 49% | 3023 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2685 | 23 | 626 | 50% | 2681 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3078 | 34 | 236 | 49% | 3085 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2993 | 37 | 224 | 51% | 2975 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2607 | 36 | 248 | 50% | 2604 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |