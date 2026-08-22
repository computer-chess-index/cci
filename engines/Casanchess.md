# Engine: Casanchess

Author: Carlos Sanchez Mayordomo

Home: https://github.com/casanche/casanchess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-15 | 2441<sub>(+101) | 2768<sub>(+145) | 2819<sub>(+88) |  |
| 1.0 | 2026-07-14 | 2340 | 2623 | 2731 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Casanchess+<version>&body=###%20Engine%20name%0ACasanchess%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-22 06:23:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2340, 2441]
  line "STC (8.0+0.08s)" [2340, 2441]
  line "LTC (60.0+0.60s)" [2623, 2768]
  line "VLTC (2m24s+1.12s)" [2731, 2819]
  line "VLTC (2m24s+1.12s)" [2731, 2819]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2819 | 35 | 234 | 50% | 2817 | 47% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2768 | 36 | 228 | 52% | 2753 | 47% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2441 | 31 | 316 | 48% | 2456 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2731 | 32 | 326 | 60% | 2496 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2623 | 32 | 338 | 58% | 2460 | 42% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2340 | 32 | 352 | 62% | 2099 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |