# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3426<sub>(+28) | 3548<sub>(+26) | 3573<sub>(+28) |  |
| 15.0 | 2025-01-31 | 3398<sub>(-7) | 3522<sub>(-7) | 3545<sub>(-3) |  |
| 14.0 | 2024-10-22 | 3405<sub>(+23) | 3529<sub>(+27) | 3548<sub>(+8) |  |
| 13.0 | 2024-07-01 | 3382<sub>(+new) | 3502<sub>(+new) | 3540<sub>(+new) |  |
| 12.0 | 2024-04-11 |  |  |  |  |
| 11.0 | 2024-03-02 |  |  |  |  |
| 10.0 | 2024-01-16 |  |  |  |  |
| 9.0 | 2023-12-17 |  |  |  |  |
| 8.0 | 2023-11-30 |  |  |  |  |
| 7.0 | 2023-11-07 |  |  |  |  |
| 6.0 | 2023-10-21 |  |  |  |  |
| 5.0 | 2023-10-01 |  |  |  |  |
| 4.0 | 2023-09-23 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Obsidian+<version>&body=###%20Engine%20name%0AObsidian%0A%0A###%20Version%0A16.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-12 06:28:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3382, 3405, 3398, 3426]
  line "STC (8.0+0.08s)" [3382, 3405, 3398, 3426]
  line "LTC (60.0+0.60s)" [3502, 3529, 3522, 3548]
  line "VLTC (2m24s+1.12s)" [3540, 3548, 3545, 3573]
  line "VLTC (2m24s+1.12s)" [3540, 3548, 3545, 3573]
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
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3382, 3405, 3398, 3426]
  line "STC (8.0+0.08s)" [3382, 3405, 3398, 3426]
  line "LTC (60.0+0.60s)" [3502, 3529, 3522, 3548]
  line "VLTC (2m24s+1.12s)" [3540, 3548, 3545, 3573]
  line "VLTC (2m24s+1.12s)" [3540, 3548, 3545, 3573]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3573 | 21 | 508 | 53% | 3555 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3548 | 18 | 720 | 51% | 3541 | 89% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3426 | 15 | 1076 | 49% | 3428 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 31 | 236 | 51% | 3541 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 29 | 280 | 50% | 3521 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3398 | 27 | 320 | 51% | 3389 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 22 | 492 | 52% | 3537 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 19 | 644 | 51% | 3521 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3405 | 16 | 944 | 50% | 3401 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 38 | 160 | 52% | 3522 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3502 | 34 | 200 | 49% | 3510 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3382 | 28 | 332 | 52% | 3370 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |