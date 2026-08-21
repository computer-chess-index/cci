# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3330<sub>(+10) | 3495<sub>(+21) | 3529<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3320<sub>(+115) | 3474<sub>(+67) | 3506<sub>(+72) |  |
| 0.60 | 2024-06-30 | 3205 | 3407 | 3434 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Motor+<version>&body=###%20Engine%20name%0AMotor%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:27:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3205, 3320, 3330]
  line "STC (8.0+0.08s)" [3205, 3320, 3330]
  line "LTC (60.0+0.60s)" [3407, 3474, 3495]
  line "VLTC (2m24s+1.12s)" [3434, 3506, 3529]
  line "VLTC (2m24s+1.12s)" [3434, 3506, 3529]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 21 | 506 | 49% | 3533 | 89% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 23 | 452 | 50% | 3491 | 83% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3330 | 20 | 608 | 50% | 3330 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 13 | 1468 | 51% | 3502 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 13 | 1484 | 50% | 3472 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3320 | 13 | 1460 | 49% | 3324 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3434 | 28 | 304 | 50% | 3436 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3407 | 28 | 316 | 52% | 3391 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3205 | 29 | 352 | 56% | 3070 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |