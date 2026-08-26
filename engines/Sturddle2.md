# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2786<sub>(+91) | 3106<sub>(+83) | 3162<sub>(-1) |  |
| 2.5.0 | 2026-02-04 | 2695<sub>(+77) | 3023<sub>(+19) | 3163<sub>(+74) |  |
| 2.4.0 | 2025-12-06 | 2618 | 3004 | 3089 |  |
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

Generated: 2026-08-26 06:29:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2618, 2695, 2786]
  line "STC (8.0+0.08s)" [2618, 2695, 2786]
  line "LTC (60.0+0.60s)" [3004, 3023, 3106]
  line "VLTC (2m24s+1.12s)" [3089, 3163, 3162]
  line "VLTC (2m24s+1.12s)" [3089, 3163, 3162]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3162 | 36 | 212 | 50% | 3158 | 58% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3106 | 33 | 260 | 51% | 3096 | 51% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2786 | 36 | 240 | 52% | 2769 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 23 | 514 | 52% | 3146 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3023 | 25 | 478 | 49% | 3033 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2695 | 23 | 626 | 50% | 2691 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3089 | 34 | 236 | 49% | 3096 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3004 | 37 | 224 | 51% | 2986 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2618 | 36 | 248 | 50% | 2614 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |