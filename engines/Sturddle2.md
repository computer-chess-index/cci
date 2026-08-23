# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2784<sub>(+91) | 3104<sub>(+84) | 3160<sub>(0) |  |
| 2.5.0 | 2026-02-04 | 2693<sub>(+78) | 3020<sub>(+18) | 3160<sub>(+73) |  |
| 2.4.0 | 2025-12-06 | 2615 | 3002 | 3087 |  |
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

Generated: 2026-08-23 06:29:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2615, 2693, 2784]
  line "STC (8.0+0.08s)" [2615, 2693, 2784]
  line "LTC (60.0+0.60s)" [3002, 3020, 3104]
  line "VLTC (2m24s+1.12s)" [3087, 3160, 3160]
  line "VLTC (2m24s+1.12s)" [3087, 3160, 3160]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3160 | 36 | 212 | 50% | 3155 | 58% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3104 | 33 | 260 | 51% | 3093 | 51% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2784 | 37 | 232 | 52% | 2766 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3160 | 23 | 514 | 52% | 3143 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3020 | 25 | 478 | 49% | 3031 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2693 | 23 | 626 | 50% | 2689 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3087 | 34 | 236 | 49% | 3093 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3002 | 37 | 224 | 51% | 2984 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2615 | 36 | 248 | 50% | 2612 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |