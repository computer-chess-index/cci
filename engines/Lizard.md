# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3301<sub>(+16) | 3482<sub>(+22) | 3515<sub>(+10) |  |
| 11.1.5 | 2024-12-30 | 3285<sub>(+56) | 3460<sub>(+16) | 3505<sub>(+15) |  |
| 11.0 | 2024-09-26 | 3229<sub>(+9) | 3444<sub>(-12) | 3490<sub>(-5) |  |
| 10.5 | 2024-07-13 | 3220 | 3456 | 3495 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lizard+<version>&body=###%20Engine%20name%0ALizard%0A%0A###%20Version%0A11.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:26:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3220, 3229, 3285, 3301]
  line "STC (8.0+0.08s)" [3220, 3229, 3285, 3301]
  line "LTC (60.0+0.60s)" [3456, 3444, 3460, 3482]
  line "VLTC (2m24s+1.12s)" [3495, 3490, 3505, 3515]
  line "VLTC (2m24s+1.12s)" [3495, 3490, 3505, 3515]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 12 | 1660 | 50% | 3517 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 12 | 1642 | 50% | 3479 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3301 | 13 | 1680 | 51% | 3295 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 21 | 544 | 50% | 3502 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 21 | 544 | 50% | 3460 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3285 | 22 | 552 | 49% | 3293 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 18 | 760 | 50% | 3488 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3444 | 18 | 768 | 49% | 3452 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3229 | 18 | 816 | 49% | 3233 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 31 | 252 | 52% | 3441 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3456 | 35 | 192 | 50% | 3455 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3220 | 31 | 272 | 48% | 3232 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |