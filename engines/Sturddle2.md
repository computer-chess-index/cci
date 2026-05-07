# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-02-04 | 2754<sub>(+84) | 3079<sub>(+25) | 3213<sub>(+74) |  |
| 2.4.0 | 2025-12-06 | 2670<sub>(+new) | 3054<sub>(+new) | 3139<sub>(+new) |  |
| 2.3.1 | 2025-09-04 |  |  |  |  |
| 2.3 | 2025-09-01 |  |  |  |  |
| 2.02 | 2025-03-28 |  |  |  |  |
| 2.01 | 2024-12-09 |  |  |  |  |
| 2.00 | 2024-12-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sturddle2+<version>&body=###%20Engine%20name%0ASturddle2%0A%0A###%20Version%0A2.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-07 06:28:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2670, 2754]
  line "STC (8.0+0.08s)" [2670, 2754]
  line "LTC (60.0+0.60s)" [3054, 3079]
  line "VLTC (2m24s+1.12s)" [3139, 3213]
  line "VLTC (2m24s+1.12s)" [3139, 3213]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3213 | 24 | 482 | 52% | 3193 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3079 | 27 | 408 | 49% | 3085 | 47% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2754 | 26 | 496 | 51% | 2743 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3139 | 34 | 236 | 49% | 3146 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3054 | 37 | 224 | 51% | 3036 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2670 | 36 | 248 | 50% | 2666 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |