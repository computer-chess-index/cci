# Engine: Zeno

Author: Oswald Nounagnon

Home: https://github.com/Toudonou/zeno

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2091<sub>(+194) | 2363<sub>(+214) | 2398<sub>(+150) |  |
| 2.0 | 2026-03-08 | 1897 | 2149 | 2248 |  |
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

Generated: 2026-08-21 06:33:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1800 --> 2400
  line "STC (8.0+0.08s)" [1897, 2091]
  line "STC (8.0+0.08s)" [1897, 2091]
  line "LTC (60.0+0.60s)" [2149, 2363]
  line "VLTC (2m24s+1.12s)" [2248, 2398]
  line "VLTC (2m24s+1.12s)" [2248, 2398]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2398 | 40 | 212 | 51% | 2390 | 28% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2363 | 39 | 240 | 49% | 2372 | 19% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2091 | 43 | 192 | 51% | 2084 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2248 | 30 | 384 | 49% | 2268 | 24% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2149 | 28 | 460 | 49% | 2156 | 21% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1897 | 27 | 482 | 48% | 1916 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |