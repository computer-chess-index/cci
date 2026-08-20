# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2773<sub>(+82) | 3100<sub>(+83) | 3156<sub>(-3) |  |
| 2.5.0 | 2026-02-04 | 2691<sub>(+79) | 3017<sub>(+19) | 3159<sub>(+74) |  |
| 2.4.0 | 2025-12-06 | 2612 | 2998 | 3085 |  |
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

Generated: 2026-08-20 06:30:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2612, 2691, 2773]
  line "STC (8.0+0.08s)" [2612, 2691, 2773]
  line "LTC (60.0+0.60s)" [2998, 3017, 3100]
  line "VLTC (2m24s+1.12s)" [3085, 3159, 3156]
  line "VLTC (2m24s+1.12s)" [3085, 3159, 3156]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3156 | 38 | 184 | 50% | 3154 | 57% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3100 | 36 | 224 | 51% | 3092 | 49% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2773 | 42 | 184 | 52% | 2754 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3159 | 23 | 514 | 52% | 3140 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3017 | 25 | 478 | 49% | 3029 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2691 | 23 | 626 | 50% | 2687 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3085 | 34 | 236 | 49% | 3090 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2998 | 37 | 224 | 51% | 2981 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2612 | 36 | 248 | 50% | 2610 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |