# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3291<sub>(+15) | 3471<sub>(+20) | 3505<sub>(+10) |  |
| 11.1.5 | 2024-12-30 | 3276<sub>(+55) | 3451<sub>(+17) | 3495<sub>(+15) |  |
| 11.0 | 2024-09-26 | 3221<sub>(+9) | 3434<sub>(-13) | 3480<sub>(-6) |  |
| 10.5 | 2024-07-13 | 3212 | 3447 | 3486 |  |
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

Generated: 2026-08-06 08:27:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3212, 3221, 3276, 3291]
  line "STC (8.0+0.08s)" [3212, 3221, 3276, 3291]
  line "LTC (60.0+0.60s)" [3447, 3434, 3451, 3471]
  line "VLTC (2m24s+1.12s)" [3486, 3480, 3495, 3505]
  line "VLTC (2m24s+1.12s)" [3486, 3480, 3495, 3505]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 12 | 1644 | 50% | 3507 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 12 | 1620 | 50% | 3470 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3291 | 13 | 1664 | 51% | 3286 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 21 | 544 | 50% | 3492 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3451 | 21 | 544 | 50% | 3451 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3276 | 22 | 552 | 49% | 3283 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3480 | 18 | 760 | 50% | 3479 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 18 | 768 | 49% | 3443 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3221 | 18 | 816 | 49% | 3224 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3486 | 31 | 252 | 52% | 3432 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 35 | 192 | 50% | 3445 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3212 | 31 | 272 | 48% | 3222 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |