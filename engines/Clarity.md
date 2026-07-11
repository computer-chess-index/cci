# Engine: Clarity

Author: Joseph Pasfield

Home: https://github.com/Vast342/Clarity

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2025-07-09 | 3231<sub>(-29) | 3432<sub>(+23) | 3432<sub>(-25) |  |
| 8.0.0 | 2025-07-09 | 3260<sub>(+new) | 3409<sub>(+new) | 3457<sub>(+new) |  |
| 7.2.0 | 2024-07-01 |  |  |  |  |
| 7.1.0 | 2024-06-23 |  |  |  |  |
| 7.0.0 | 2024-06-09 |  |  |  |  |
| 6.0.0 | 2024-04-10 |  |  |  |  |
| 5.1.0 | 2024-02-20 |  |  |  |  |
| 5.0.0 | 2024-02-13 |  |  |  |  |
| 4.1.0 | 2024-01-07 |  |  |  |  |
| 4.0.0 | 2023-12-31 |  |  |  |  |
| 3.0.0 | 2023-12-09 |  |  |  |  |
| 2.0.0 | 2023-11-05 |  |  |  |  |
| 1.0.1 | 2023-10-17 |  |  |  |  |
| 1.0.0 | 2023-10-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Clarity+<version>&body=###%20Engine%20name%0AClarity%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-11 06:24:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3231, 3260]
  line "STC (8.0+0.08s)" [3231, 3260]
  line "LTC (60.0+0.60s)" [3432, 3409]
  line "VLTC (2m24s+1.12s)" [3432, 3457]
  line "VLTC (2m24s+1.12s)" [3432, 3457]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3231, 3260]
  line "STC (8.0+0.08s)" [3231, 3260]
  line "LTC (60.0+0.60s)" [3432, 3409]
  line "VLTC (2m24s+1.12s)" [3432, 3457]
  line "VLTC (2m24s+1.12s)" [3432, 3457]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3432 | 85 | 32 | 48% | 3444 | 78% |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3457 | 25 | 388 | 51% | 3449 | 80% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3432 | 93 | 28 | 50% | 3434 | 71% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3409 | 25 | 372 | 51% | 3405 | 79% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3260 | 26 | 380 | 50% | 3260 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3231 | 113 | 20 | 45% | 3264 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |