# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2757<sub>(+70) | 3097<sub>(+85) | 3155<sub>(+3) |  |
| 2.5.0 | 2026-02-04 | 2687<sub>(+79) | 3012<sub>(+18) | 3152<sub>(+73) |  |
| 2.4.0 | 2025-12-06 | 2608 | 2994 | 3079 |  |
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

Generated: 2026-08-15 06:29:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2608, 2687, 2757]
  line "STC (8.0+0.08s)" [2608, 2687, 2757]
  line "LTC (60.0+0.60s)" [2994, 3012, 3097]
  line "VLTC (2m24s+1.12s)" [3079, 3152, 3155]
  line "VLTC (2m24s+1.12s)" [3079, 3152, 3155]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3155 | 52 | 104 | 51% | 3140 | 53% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3097 | 44 | 144 | 52% | 3077 | 51% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2757 | 47 | 140 | 51% | 2746 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3152 | 23 | 514 | 52% | 3135 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3012 | 25 | 478 | 49% | 3024 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2687 | 23 | 626 | 50% | 2681 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3079 | 34 | 236 | 49% | 3085 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2994 | 37 | 224 | 51% | 2975 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2608 | 36 | 248 | 50% | 2606 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |