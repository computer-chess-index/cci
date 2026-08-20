# Engine: Zeno

Author: Oswald Nounagnon

Home: https://github.com/Toudonou/zeno

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2094<sub>(+199) | 2356<sub>(+208) | 2399<sub>(+153) |  |
| 2.0 | 2026-03-08 | 1895 | 2148 | 2246 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeno+<version>&body=###%20Engine%20name%0AZeno%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-20 06:32:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1800 --> 2400
  line "STC (8.0+0.08s)" [1895, 2094]
  line "STC (8.0+0.08s)" [1895, 2094]
  line "LTC (60.0+0.60s)" [2148, 2356]
  line "VLTC (2m24s+1.12s)" [2246, 2399]
  line "VLTC (2m24s+1.12s)" [2246, 2399]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2399 | 41 | 196 | 52% | 2385 | 29% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2356 | 39 | 236 | 49% | 2372 | 19% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2094 | 44 | 184 | 51% | 2084 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2246 | 30 | 384 | 49% | 2267 | 24% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2148 | 28 | 460 | 49% | 2155 | 21% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1895 | 27 | 482 | 48% | 1914 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |