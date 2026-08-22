# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2662<sub>(+67) | 2876<sub>(+50) | 2940<sub>(+9) |  |
| 2.0 | 2026-06-14 | 2595<sub>(+new) | 2826<sub>(+new) | 2931<sub>(+new) |  |
| 1.0 | 2026-06-09 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Noggin+<version>&body=###%20Engine%20name%0ANoggin%0A%0A###%20Version%0A2.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-22 06:27:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2500 --> 3000
  line "STC (8.0+0.08s)" [2595, 2662]
  line "STC (8.0+0.08s)" [2595, 2662]
  line "LTC (60.0+0.60s)" [2826, 2876]
  line "VLTC (2m24s+1.12s)" [2931, 2940]
  line "VLTC (2m24s+1.12s)" [2931, 2940]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2940 | 36 | 224 | 53% | 2916 | 46% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2876 | 40 | 188 | 51% | 2863 | 44% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2662 | 45 | 168 | 51% | 2653 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2931 | 49 | 128 | 56% | 2884 | 41% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2826 | 56 | 92 | 51% | 2813 | 46% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2595 | 52 | 124 | 44% | 2650 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |