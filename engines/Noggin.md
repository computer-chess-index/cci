# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2638<sub>(+47) | 2871<sub>(+49) | 2908<sub>(-19) |  |
| 2.0 | 2026-06-14 | 2591<sub>(+new) | 2822<sub>(+new) | 2927<sub>(+new) |  |
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

Generated: 2026-07-26 06:27:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2500 --> 3000
  line "STC (8.0+0.08s)" [2591, 2638]
  line "STC (8.0+0.08s)" [2591, 2638]
  line "LTC (60.0+0.60s)" [2822, 2871]
  line "VLTC (2m24s+1.12s)" [2927, 2908]
  line "VLTC (2m24s+1.12s)" [2927, 2908]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2908 | 48 | 132 | 52% | 2893 | 39% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2871 | 46 | 140 | 52% | 2855 | 45% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2638 | 50 | 132 | 48% | 2655 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2927 | 49 | 128 | 56% | 2880 | 41% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2822 | 56 | 92 | 51% | 2809 | 46% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2591 | 52 | 124 | 44% | 2646 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |