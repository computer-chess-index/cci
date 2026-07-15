# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2746<sub>(+126) | 3047<sub>(+112) | 3114<sub>(+101) |  |
| 0.95 | 2026-04-23 | 2620<sub>(+33) | 2935<sub>(+14) | 3013<sub>(-35) |  |
| 0.94 | 2025-12-11 | 2587<sub>(+new) | 2921<sub>(+new) | 3048<sub>(+new) |  |
| 0.93 | 2025-04-23 |  |  |  |  |
| 0.92 | 2024-12-08 |  |  |  |  |
| 0.91 | 2024-10-19 |  |  |  |  |
| 0.90 | 2023-06-12 |  |  |  |  |
| 0.89 | 2023-03-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Myrddin+<version>&body=###%20Engine%20name%0AMyrddin%0A%0A###%20Version%0A0.96" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-15 06:27:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2587, 2620, 2746]
  line "STC (8.0+0.08s)" [2587, 2620, 2746]
  line "LTC (60.0+0.60s)" [2921, 2935, 3047]
  line "VLTC (2m24s+1.12s)" [3048, 3013, 3114]
  line "VLTC (2m24s+1.12s)" [3048, 3013, 3114]
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
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2587, 2620, 2746]
  line "STC (8.0+0.08s)" [2587, 2620, 2746]
  line "LTC (60.0+0.60s)" [2921, 2935, 3047]
  line "VLTC (2m24s+1.12s)" [3048, 3013, 3114]
  line "VLTC (2m24s+1.12s)" [3048, 3013, 3114]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3114 | 32 | 282 | 50% | 3110 | 53% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3047 | 33 | 268 | 51% | 3040 | 48% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2746 | 32 | 312 | 49% | 2755 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3013 | 29 | 370 | 51% | 3004 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 29 | 366 | 49% | 2943 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2620 | 29 | 398 | 52% | 2599 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3048 | 27 | 380 | 50% | 3047 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2921 | 28 | 382 | 53% | 2889 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2587 | 27 | 476 | 50% | 2569 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |