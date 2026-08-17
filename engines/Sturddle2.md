# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2765<sub>(+78) | 3094<sub>(+82) | 3150<sub>(-4) |  |
| 2.5.0 | 2026-02-04 | 2687<sub>(+79) | 3012<sub>(+18) | 3154<sub>(+75) |  |
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

Generated: 2026-08-17 06:42:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2608, 2687, 2765]
  line "STC (8.0+0.08s)" [2608, 2687, 2765]
  line "LTC (60.0+0.60s)" [2994, 3012, 3094]
  line "VLTC (2m24s+1.12s)" [3079, 3154, 3150]
  line "VLTC (2m24s+1.12s)" [3079, 3154, 3150]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3150 | 45 | 140 | 51% | 3143 | 53% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3094 | 36 | 224 | 51% | 3087 | 49% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2765 | 44 | 164 | 52% | 2749 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3154 | 23 | 514 | 52% | 3135 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3012 | 25 | 478 | 49% | 3024 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2687 | 23 | 626 | 50% | 2681 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3079 | 34 | 236 | 49% | 3086 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2994 | 37 | 224 | 51% | 2977 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2608 | 36 | 248 | 50% | 2604 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |