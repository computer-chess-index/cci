# Engine: Ruffian

Author: Per-Ola Valfridsson

Home: 

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2004-02-01 | 2142<sub>(+10) | 2429<sub>(0) | 2492<sub>(+21) |  |
| 1.0.5 | 2003-03-19 | 2132 | 2429 | 2471 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ruffian+<version>&body=###%20Engine%20name%0ARuffian%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-05 06:29:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.5", "2.1.0"]
  y-axis "Elo Rating" 2100 --> 2500
  line "STC (8.0+0.08s)" [2132, 2142]
  line "STC (8.0+0.08s)" [2132, 2142]
  line "LTC (60.0+0.60s)" [2429, 2429]
  line "VLTC (2m24s+1.12s)" [2471, 2492]
  line "VLTC (2m24s+1.12s)" [2471, 2492]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2492 | 51 | 132 | 50% | 2491 | 26% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2429 | 30 | 390 | 47% | 2454 | 21% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2142 | 24 | 614 | 50% | 2140 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2471 | 38 | 260 | 48% | 2495 | 22% |
| 1.0.5 | LTC <sub>(60.0+0.60s)</sub> | 2429 | 15 | 1464 | 50% | 2430 | 24% |
| 1.0.5 | STC <sub>(8.0+0.08s)</sub> | 2132 | 16 | 1560 | 47% | 2194 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |