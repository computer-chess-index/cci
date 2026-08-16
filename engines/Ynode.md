# Engine: Ynode

Author: oozturk777

Home: https://github.com/oozturk777/ynode

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3120<sub>(-11) | 3333<sub>(+23) | 3384<sub>(+24) |  |
| 0219 | 2025-11-16 | 3131 | 3310 | 3360 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ynode+<version>&body=###%20Engine%20name%0AYnode%0A%0A###%20Version%0A0234" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-16 06:35:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3100 --> 3400
  line "STC (8.0+0.08s)" [3131, 3120]
  line "STC (8.0+0.08s)" [3131, 3120]
  line "LTC (60.0+0.60s)" [3310, 3333]
  line "VLTC (2m24s+1.12s)" [3360, 3384]
  line "VLTC (2m24s+1.12s)" [3360, 3384]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | 3384 | 26 | 350 | 50% | 3386 | 81% |
| 0234 | LTC <sub>(60.0+0.60s)</sub> | 3333 | 25 | 380 | 51% | 3324 | 75% |
| 0234 | STC <sub>(8.0+0.08s)</sub> | 3120 | 25 | 440 | 50% | 3120 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0219 | VLTC <sub>(2m24s+1.12s)</sub> | 3360 | 27 | 336 | 52% | 3335 | 79% |
| 0219 | LTC <sub>(60.0+0.60s)</sub> | 3310 | 25 | 406 | 49% | 3303 | 72% |
| 0219 | STC <sub>(8.0+0.08s)</sub> | 3131 | 24 | 490 | 53% | 3085 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |